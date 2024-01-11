const { createApp } = Vue;

createApp({
  data() {
    return {
      // disks: [
      //   {
      //     name: 'New Jersey',
      //     artist: 'Bon Jovi',
      //     year: '1988',
      //   },
      //   {
      //     name: 'Live at Wembley 86',
      //     artist: 'Queen',
      //     year: '1992',
      //   },
      //   {
      //     name: "Ten's Tales",
      //     artist: 'Sting',
      //     year: '1993',
      //   },
      //   {
      //     name: 'Steve Gadd Band',
      //     artist: 'Steve Gadd Band',
      //     year: '2018',
      //   },
      //   {
      //     name: 'Brave New World',
      //     artist: 'Iron maiden',
      //     year: '2000',
      //   },
      //   {
      //     name: 'One more car',
      //     artist: 'Eric Clapton',
      //     year: '2002',
      //     aa: 'ciao',
      //   },
      // ],

      disks: [],
    };
  },
  methods: {
    getDisks() {
      axios.get('server.php').then((response) => {
        console.log({ response });
        this.disks = response.data;
      });
    },
  },
  created() {
    this.getDisks();
  },
}).mount('#app');
