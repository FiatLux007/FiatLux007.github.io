import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://fiatlux007.github.io/',
  integrations: [
    starlight({
      title: 'siyiGoMango!',
      description: 'Study in Public · Engineering Notes by Siyi',
      head: [],
      tableOfContents: false,

      sidebar: [
        { label: 'About Me', link: '/' },
        { label: 'Projects', link: '/projects/' },
        {
          label: 'Study In Public Note',
          items: [
            { label: 'Overview', link: '/study-in-public-note/' },
            { label: 'LLD / OOD', link: '/study-in-public-note/lld/' },
            { label: 'LLD / OOD · Introduction', link: '/study-in-public-note/lld/introduction/' },
            { label: 'LLD / OOD · Delivery Framework', link: '/study-in-public-note/lld/delivery-framework/' },
            { label: 'Java Fundamentals', link: '/study-in-public-note/java-fundamentals/' },
            { label: 'Springboot', link: '/study-in-public-note/springboot/' },
            { label: 'Kafka', link: '/study-in-public-note/kafka/' },
            { label: 'Java 8 Concurrency', link: '/study-in-public-note/java-8-concurrency/' },
            { label: 'Microservices', link: '/study-in-public-note/microservices/' },
            { label: 'AI Agent Basic', link: '/study-in-public-note/ai-agent-basic/' },
          ],
        },
        { label: 'Blogs', link: '/blogs/' },
        { label: 'Something Fun', link: '/fun/' },
      ],
    }),
  ],
});
