function yesnoCheck() {
    if (document.getElementById('customRadio3').checked) {
        document.getElementById('ifYes').style.display = 'block';
    }
    if (document.getElementById('customRadio2').checked) {
      document.getElementById('ifYes').style.display = 'none';
    }
    if (document.getElementById('customRadio1').checked) {
    document.getElementById('ifYes').style.display = 'none';
    }
}
