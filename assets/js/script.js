<!-- JavaScript для скрытия/показа контента -->
<script>
  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', function () {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
</script>
