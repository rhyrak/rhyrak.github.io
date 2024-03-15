<!-- Selçuk Gençay 20050111008 -->
<!-- Merter Çoban  20050111034 -->
<!DOCTYPE html>

<html lang="en">

<head>
	<title>Currency Converter</title>
	<meta name="description" content="CENG 311 Inclass Activity 4" />
</head>

<body>
	<?php
	$conversions = array(
		"USD_USD" => 1,
		"EUR_EUR" => 1,
		"CAD_CAD" => 1,
		"USD_CAD" => 1.35,
		"USD_EUR" => 0.92,
		"EUR_USD" => 1.09,
		"EUR_CAD" => 1.47,
		"CAD_USD" => 0.74,
		"CAD_EUR" => 0.68
	);

	$from_value = 0;
	$from_currency = "USD";
	$to_value = 0;
	$to_currency = "USD";

	if ($_POST) {
		if (!empty($_POST["fvalue"])) $from_value = $_POST["fvalue"];
		if (!empty($_POST["from"])) $from_currency = $_POST["from"];
		if (!empty($_POST["to"])) $to_currency = $_POST["to"];

		$to_value = $from_value * $conversions[$from_currency . "_" . $to_currency];

		echo "<h2>I am happy to announce that I have successfully converted currencies 🎉</h2>";
	}
	?>
	<form action="activity4.php" method="POST">
		<table>
			<tr>
				<td>From:</td>
				<td>
					<?php
					if (!empty($_POST["fvalue"])) {
						echo '<input type="text" name="fvalue" value="' . $_POST["fvalue"] . '" />';
					} else {
						echo '<input type="number" name="fvalue" value="0"/>';
					}
					?>
				</td>
				<td>Currency:</td>
				<td>
					<?php
					if ($_POST) {
						$isEUR = $from_currency == "EUR";
						$isUSD = $from_currency == "USD";
						$isCAD = $from_currency == "CAD";

						echo '<select name="from">
							<option value="USD" ' . ($isUSD ? "selected" : "") . ' /> US Dollar </option>
							<option value="CAD" ' . ($isCAD ? "selected" : "") . ' /> Canadian Dollar </option>
							<option value="EUR" ' . ($isEUR ? "selected" : "") . ' /> Euro </option>
						</select>';
					} else {
						echo '<select name="from">
							<option value="USD" /> US Dollar </option>
							<option value="CAD" /> Canadian Dollar </option>
							<option value="EUR" /> Euro </option>
						</select>';
					}
					?>
				</td>
			</tr>
			<tr>
				<td>To:</td>
				<td>
					<?php
					if ($_POST) {
						echo '<input type="text" name="tvalue" disabled value="' . $to_value . '" />';
					} else {
						echo '<input type="text" name="tvalue" disabled />';
					}
					?>
				</td>
				<td>Currency:</td>
				<td>
					<?php
					if ($_POST) {
						$isEUR = $to_currency == "EUR";
						$isUSD = $to_currency == "USD";
						$isCAD = $to_currency == "CAD";

						echo '<select name="to">
						<option value="USD" ' . ($isUSD ? "selected" : "") . ' /> US Dollar </option>
						<option value="CAD" ' . ($isCAD ? "selected" : "") . ' /> Canadian Dollar </option>
						<option value="EUR" ' . ($isEUR ? "selected" : "") . ' /> Euro </option>
						</select>';
					} else {
						echo '<select name="to">
						<option value="USD" /> US Dollar </option>
						<option value="CAD" /> Canadian Dollar </option>
						<option value="EUR" /> Euro </option>
						</select>';
					}
					?>
				</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<input type="submit" value="convert" />
				</td>
			</tr>
		</table>
	</form>
</body>