<script>
  const chapters = [
    {
      title: 'Navigating the Spanish bureaucracy',
      strapline: 'Understanding Visas',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      title: 'Navigating the Spanish bureaucracy',
      strapline: 'Understanding Visas 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      title: 'Navigating the Spanish bureaucracy',
      strapline: 'Understanding Visas 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      title: 'Navigating the Spanish bureaucracy',
      strapline: 'Understanding Visas 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      title: 'Navigating the Spanish bureaucracy',
      strapline: 'Understanding Visas 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
  ]
  let selectedChapterNumber = $state(1);
  let selectedChapter = $derived(
    chapters[selectedChapterNumber - 1]
  );
  function selectChapter(chapterNumber) {
    selectedChapterNumber = chapterNumber;
  }
</script>
<section class="chapter-preview default-margin">
  <h2 class="mb-l">what are you getting?</h2>
  <div class="chapter-container">
    <ul>
      {#each chapters as chapter, index}
        <li>
          <button class="chapter-title" class:selected-chapter-title={selectedChapterNumber === index + 1}
           onclick={() => selectChapter(index + 1)} aria-controls={`chapter-info-${index}`}  aria-expanded={selectedChapterNumber === index + 1}>
            <h3>{chapter.title}</h3>
            <span class="arrow-icon"></span>
          </button>
        </li>
      {/each}
    </ul>
    <div class="chapter-info">
      {#if selectedChapter}
        <h3 class="chapter-strapline italic mb-s">
          {selectedChapter.strapline}
        </h3>
        <p>{selectedChapter.content}</p>
      {/if}
    </div>
  </div>

</section>
<style>
  .chapter-preview {
    padding: 80px;
    margin-left: 12vw;
    margin-right: 20vw;
    max-width: 1150px;
  }
  .chapter-container {
    display: flex;
    justify-content: space-between;
  }

  .chapter-container ul {
    width: 40%;
  }

  .chapter-info {
    width: 55%;
  }

  .chapter-title {
    border-bottom: 1px solid grey;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: left;
  }

  .selected-chapter-title {
    background-color: black;
    border: none;
    color: white;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);
  }
</style>
