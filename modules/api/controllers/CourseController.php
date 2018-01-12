<?php

namespace app\modules\api\controllers;

use yii\rest\ActiveController;

/**
 * Default controller for the `api` module
 */
class CourseController extends ActiveController
{
    public $modelClass = 'app\modules\api\models\Course';
}
