<style>
.hidden{
  display:none;
}

.unhidden{
  display:block;
}
</style>
<script type="text/javascript">
function unhide(clickedButton, divID) {
var item = document.getElementById(divID);
if (item) {
  if(item.className=='hidden'){
    item.className = 'unhidden' ;
    clickedButton.value = 'hide'
  }else{
    item.className = 'hidden';
    clickedButton.value = "unhide"
  }
}}

</script>

<body>
<div id="about" class="hidden">
<div class="content3">
<p>some text goes here.</p>
</div>
</div>
<input type="button" onclick="unhide(this, 'about')" value="unhide">
</body>
