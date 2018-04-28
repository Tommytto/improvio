<?php

use app\modules\api\models\Lesson;
use yii\db\Migration;

/**
 * Class m180128_094917_create_table_lessons
 */
class m180128_094917_create_table_lessons extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $tableOptions = null;

        if ($this->db->driverName === 'mysql') { // Тип БД, далее тип таблицы и стандартная кодировка для этой таблицы.
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }
        $this->createTable(Lesson::tableName(), [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->string()->notNull(),
            'type' => $this->integer()->notNull(),
            'isPublic' => $this->boolean()->defaultValue(false),
        ], $tableOptions);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable(Lesson::tableName());
    }
}
