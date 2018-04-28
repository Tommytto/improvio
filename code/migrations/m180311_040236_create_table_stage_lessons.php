<?php

use app\modules\api\models\Lesson;
use app\modules\api\models\Stage;
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

        $stageFk = 'stage_lessons_stage_fk';
        $this->addForeignKey($stageFk, StageLessons::tableName(), 'stageId', Stage::tableName(), 'id', 'CASCADE', 'CASCADE');
        $lessonFk = 'stage_lessons_lesson_fk';
        $this->addForeignKey($lessonFk, StageLessons::tableName(), 'lessonId', Lesson::tableName(), 'id', 'CASCADE', 'CASCADE');
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable(StageLessons::tableName());
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
