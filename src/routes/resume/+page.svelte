<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import resume from '$lib/assets/26resumeV5.pdf';
  let jobs_array = [
    {
      title: 'Full-stack Software Engineer - Envita Medical, AZ',
      fromTo: 'Current',
      bps: [
        'Built a multi-stage AI research pipeline in TypeScript analyzing drug-pathway relationships across 2.8M + data points with full transactional logging',
        'Designed a provider agnostic LLM orchestration layer to A/B test different providers across the pipeline stages',
        'Built a custom patient report editor for physicians to review using Sveltekit',
        'Architected a LIMS integration with our local infrastructure, AWS and third party contractors',
        'Built a custom parser and bulk database upload tool in Rust'
      ]
    },
    {
      title: 'Software Engineer - Conduit Resources, Remote',
      fromTo: `February 2024 - September 2024`,
      bps: [
        'Built an ETL pipeline in C# that parsed 2M + unstructured log files into structured, queryable data for searching, error analytics, and real-time monitoring',
        'Owned the triage of engineering tickets across a legacy codebase, keeping things running for every active client'
      ]
    },
    {
      title: 'Python Developer(Contract) - Florida Blue, Remote',
      fromTo: 'October 2022 - June 2023',
      bps: [
        'Maintained legacy Python for the payment verification system',
        'Integrated third-party payment providers like Stripe and PayPal',
      ]
    },
    {
      title: 'Solutions Developer - Zoot Enterprise, MT',
      fromTo: 'July 2021 - May 2022',
      bps: [
        'Owned the integration between Zoot\'s risk decisioning systems and Target\'s production infrastructure end-to-end, debugging production issues directly with Target\'s engineering team',
        'Wrote a Bash and Python automation tool for pulling peak season data, dropping a 30-day manual process to under 2 hours'
      ]
    },
    {
      title: 'Python Developer - MSU, MT',
      fromTo: 'February 2020 - November 2020',
      bps: [
        'Developed a program to scrape and extract student names from public honor roll lists for email outreach campaigns',
        'Led the effort to modernize recruitment strategy with social media integration.'
      ]
    }
  ];
</script>

<svelte:head>
  <title>Resume</title>
</svelte:head>

<div class="flex flex-col gap-2 font-hedvig">
  <div class="prose prose-stone dark:prose-invert">
    <div class="w-full items-baseline justify-between md:inline-flex">
      <h1 class="text-3xl dark:font-medium">Professional Experience</h1>
      <a
        class="bg-radial via-stone-50 to-transparent font-semibold transition-colors duration-200 ease-out hover:bg-radial hover:from-orange-300 dark:via-stone-800 dark:font-medium dark:text-stone-400 hover:dark:from-pink-800"
        target="_blank"
        href={resume}
        rel="noopener noreferrer"
      >
        PDF version
      </a>
    </div>
    <p class="font-manrope">
      Currently looking for new opportunities as a full-stack developer with about 4 years of
      experience. I am looking for a company that values real software engineering, real problem
      solving, and hard work.
    </p>
  </div>
  <div class="flex flex-col gap-4">
    {#each jobs_array as job (job.title)}
      <div class="border-b border-stone-300 pb-4 last:border-none">
        <Card cardType="Job" {...job} />
      </div>
    {/each}
  </div>
</div>
