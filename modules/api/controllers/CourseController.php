<?php

namespace app\modules\api\controllers;

use app\modules\api\actions\UpdateCourceAction;
use yii\rest\ActiveController;

/**
 * Default controller for the `api` module
 */
class CourseController extends ActiveController
{
    public $modelClass = 'app\modules\api\models\Course';

//    /**
//     * @inheritdoc
//     */
//    public function actions()
//    {
//        $actions = parent::actions();
//        $actions['update'] = [
//            'class' => UpdateCourceAction::className(),
//            'modelClass' => $this->modelClass,
//            'checkAccess' => [$this, 'checkAccess'],
//            'scenario' => $this->updateScenario,
//        ];
//        return $actions;
//    }
}
