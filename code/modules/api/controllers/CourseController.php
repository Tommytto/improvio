<?php

namespace app\modules\api\controllers;

use app\modules\api\actions\GetCourseAction;
use app\modules\api\actions\PosterCourceAction;
use app\modules\api\actions\CreateCourseAction;
use yii\rest\ActiveController;

/**
 * Default controller for the `api` module
 */
class CourseController extends ActiveController
{
    public $modelClass = 'app\modules\api\models\Course';

    /**
     * @inheritdoc
     */
    public function actions()
    {
        $actions = parent::actions();
        $actions['poster'] = [
            'class' => PosterCourceAction::className(),
            'modelClass' => $this->modelClass,
            'checkAccess' => [$this, 'checkAccess'],
            'scenario' => $this->updateScenario,
        ];
        $actions['create'] = [
            'class' => CreateCourseAction::className(),
            'modelClass' => $this->modelClass,
            'checkAccess' => [$this, 'checkAccess'],
            'scenario' => $this->updateScenario,
        ];
        $actions['view'] = [
            'class' => GetCourseAction::className(),
            'modelClass' => $this->modelClass,
            'checkAccess' => [$this, 'checkAccess'],
        ];
        return $actions;
    }
}
