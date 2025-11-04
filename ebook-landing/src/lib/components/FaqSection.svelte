<script>
  import FaqItem from './FaqItem.svelte';
  import Button from './Button.svelte';
  const faqs = [
    {
      question: 'What is the book about?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      question: 'What is the book about1 ?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      question: 'What is the book about2?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      question: 'What is the book about3?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
    {
      question: 'What is the book about4?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed iure, eius molestias quo eveniet earum natus tenetur excepturi doloribus sit quaerat, minus eaque libero, ullam fuga sint laborum. Minima.'
    },
  ]
  let questionsCurrentlyExpanded = $state(-1);
  function onClick(index) {
    if (questionsCurrentlyExpanded === index) {
      questionsCurrentlyExpanded = -1;
    } else {
      questionsCurrentlyExpanded = index;
    }
  }
</script>
<section class="faq-section">
  <h2 class="mb-l">frequently asked questions</h2>
  <div class="faq-container">
    {#each faqs as faq, index}
      <FaqItem question={faq.question} answer={faq.answer} isExpanded={questionsCurrentlyExpanded === index} onclick={() => onClick(index)} />
    {/each}
  </div>
<div class="additional-info">
  <Button class="mt-5">Buy now</Button>
  <p class="mt-m">Any other questions?</p>
  <a href="https://twitter.com/yourusername" target="_blank">
  <p>Contact me on Twitter</p>
  </a>
</div>
</section>
<style>
  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
