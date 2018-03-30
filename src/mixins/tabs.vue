<script>
  export default {
    methods: {
      openTab(evt, tabName) {
        const tabcontent = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = 'none';
        }
        const tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className += ' active';
      },
    },
  };
</script>

<style>
  .tab {
    overflow: hidden;
  }

  .tab button {
    float: left;
    outline: none;
    cursor: pointer;
    padding: 15px;
    border: 1px solid black;
  }

  .tab button.active {
    border-bottom: 1px solid transparent;
  }

  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid black;
    margin-top: -1px;
  }
</style>
