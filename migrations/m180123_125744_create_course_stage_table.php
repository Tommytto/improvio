<?php

use app\modules\api\models\Course;
use app\modules\api\models\CourseStage;
use app\modules\api\models\Stage;
use yii\db\Migration;

/**
 * Handles the creation of table `course_stage`.
 */
class m180123_125744_create_course_stage_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable(CourseStage::tableName(), [
            'courseId' => $this->integer()->notNull(),
            'stageId'   => $this->integer()->notNull(),
        ]);

        $this->addPrimaryKey('course_stage_pk', CourseStage::tableName(), [
            'courseId',
            'stageId',
        ]);

        $courseFk = 'course_stage_course_fk';
        $this->addForeignKey($courseFk, CourseStage::tableName(), 'courseId', Course::tableName(), 'id', 'CASCADE', 'CASCADE');
        $stageFk = 'course_stage_stage_fk';
        $this->addForeignKey($stageFk, CourseStage::tableName(), 'stageId', Stage::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable(CourseStage::tableName());
    }
}
