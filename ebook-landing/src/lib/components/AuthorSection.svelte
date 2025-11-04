<script>
  import authorImage from '$assets/book_cover.png';

</script>
<section class="author-section">
  <h2 class="mb-l">About the author</h2>
  <div class="author-container">
    <img src={authorImage} alt="Author Image"/>
    <div class="author-text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.</p>
    </div>
  </div>
</section>
<style>
  .author-section {
    padding: 80px 0;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .author-container {
    display: flex;
    justify-content: space-between;
  }

  .author-container img {
    width: 40%;
    border: 6px solid black;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
  }

  .author-text {
    width: 55%;
  }

  /* .author-text p:not(:last-of-type) {
    margin-bottom: 8px;
  } */
</style>
