<?php

use app\modules\api\models\Stage;
use yii\db\Migration;

/**
 * Class m180122_023012_create_table_stages
 */
class m180122_023012_create_table_stages extends Migration
{

    // Use up()/down() to run migration code without a transaction.
    public function safeUp()
    {
        $tableOptions = null;

        if ($this->db->driverName === 'mysql') { // Тип БД, далее тип таблицы и стандартная кодировка для этой таблицы.
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }
        $this->createTable(Stage::tableName(), [
            'id'       => $this->primaryKey(),
            'name'     => $this->string(),
        ], $tableOptions);
    }

    public function safeDown()
    {
        $this->dropTable(Stage::tableName());
    }
}
