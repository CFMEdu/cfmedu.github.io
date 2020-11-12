//去除副檔名跟取得副檔名

function strriposfunction($val="",$type=""){
switch($type){
case "1":
//去除副檔名
$fileName = $val;
if (false !== $pos = strripos($fileName, '.')) {
$fileName = substr($fileName, 0, $pos);
}

break;

case "2":
//取得副檔名
$fileName = $val;
if(false !== $pos = strripos($fileName, '.')) {
$fileName = substr($fileName, $pos+1, strlen($fileName));
}

break;
}
return $fileName;

}

