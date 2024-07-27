<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include('../database.php');
    require('../config.php');
    
    $lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';
    $sort = isset($_GET['sort']) ? $_GET['sort'] : 'latest';
    $filter = isset($_GET['filter']) ? $_GET['filter'] : '';
    $limit = isset($_GET['limit']) ? $_GET['limit'] : -1;
    
    if (!in_array($lang, ['en', 'fr'])) {
        echo json_encode(["code" => PROJECT_ARGUMENT_ERROR . "A", "message" => "Invalid language parameter."]);
        exit;
    }
    
    if (!in_array($sort, ['latest', 'oldest'])) {
        echo json_encode(["code" => PROJECT_ARGUMENT_ERROR . "B", "message" => "Invalid sort parameter."]);
        exit;
    }
    
    $query = "
        SELECT p.id, pt.name, pt.description, p.technologies, p.creation
        FROM projects p
        JOIN project_translations pt ON p.id = pt.project_id
        WHERE pt.language = ?
    ";
    
    if (!empty($filter)) {
        $query .= " AND pt.name LIKE ?";
    }
    
    if ($sort === 'latest') {
        $query .= " ORDER BY p.creation DESC";
    } elseif ($sort === 'oldest') {
        $query .= " ORDER BY p.creation ASC";
    }
    
    if ($limit > 0) {
        $query .= " LIMIT ?";
    }
    
    $stmt = $conn->prepare($query);
    
    if (!empty($filter)) {
        $filter_param = "%$filter%";
        if ($limit > 0) {
            $stmt->bind_param('ssi', $lang, $filter_param, $limit);
        } else {
            $stmt->bind_param('ss', $lang, $filter_param);
        }
    } elseif ($limit > 0) {
        $stmt->bind_param('si', $lang, $limit);
    } else {
        $stmt->bind_param('s', $lang);
    }
    
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result === false) {
        echo json_encode(["code" => SQL_QUERY_ERROR, "message" => "SQL Error " . $result]);
        exit;
    }
    
    $projects = [];
    
    while ($row = $result->fetch_assoc()) {
        $row['creation'] = date('d/m/Y', strtotime($row['creation']));
        $projects[] = $row;
    }
    
    if (empty($projects)) {
        echo json_encode(["message" => "No projects found."]);
    } else {
        echo json_encode($projects);
    }
?>
