<?php
namespace app\modules\api\models;

use yii\base\Model;
use yii\db\ActiveRecord;
use yii\web\UploadedFile;

class UploadForm extends Model
{
    /**
    * @var UploadedFile
    */
    public $fileImage;

    /**
     * @var string
     */
    public $filePath;

    public function rules()
    {
        return [
            [['fileImage'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
        ];
    }

    public function upload()
    {
        $bytes = openssl_random_pseudo_bytes(6);
        $hash = bin2hex($bytes);
        $this->filePath = 'uploads/' . $hash . '.' . $this->fileImage->extension;
        if ($this->validate()) {
            $this->fileImage->saveAs($this->filePath);
            return true;
        } else {
            return false;
        }
    }
}