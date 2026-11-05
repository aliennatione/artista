<script>
  let query = $state('');
  const articles = [
    { title: 'Articolo 1', tag: 'teatro' },
    { title: 'Articolo 2', tag: 'società' },
  ];
  let filtered = $derived(articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase())));
</script>
<input bind:value={query} placeholder="Cerca..." />
<ul>
  {#each filtered as a}
    <li>{a.title} <small>({a.tag})</small></li>
  {/each}
</ul>
