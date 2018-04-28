<?php

use app\modules\api\models\StageLessons;
use yii\db\Migration;

/**
 * Class m180311_040236_create_table_stage_lessons
 */
class m180311_040236_create_table_stage_lessons extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->createTable(StageLessons::tableName(), [
            'stageId' => $this->integer()->notNull(),
            'lessonId'   => $this->integer()->notNull(),
        ]);

        $this->addPrimaryKey('stage_lessons_pk', StageLessons::tableName(), [
            'stageId',
            'lessonId',
        ]);

        $courseFk = 'course_stage_course_fk';
        $this->addForeignKey($courseFk, CourseStage::tableName(), 'courseId', Course::tableName(), 'id', 'CASCADE', 'CASCADE');
        $stageFk = 'course_stage_stage_fk';
        $this->addForeignKey($stageFk, CourseStage::tableName(), 'stageId', Stage::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m180311_040236_create_table_stage_lessons cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180311_040236_create_table_stage_lessons cannot be reverted.\n";

        return false;
    }
    */
}
