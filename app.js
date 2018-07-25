var vm = new Vue({
  el: '#app',
  data: {
    folders: [{
      name: "Inbox",
      active: true,
      inTabs: true,
      path: "//inbox",
      unreadMessages: 2
    },{
      name: "News",
      active: false,
      inTabs: false,
      path: "//inbox/news/",
      placeholder: "Search in 'News'",
      unreadMessages: 0
    }, {
      name: "Team",
      active: false,
      inTabs: true,
      path: "//inbox/team/",
      placeholder: "Search in 'Team'",
      unreadMessages: 0
    }, {
      name: "Organization",
      active: false,
      inTabs: true,
      path: "//inbox/organization/",
      placeholder: "Search in 'Organization'",
      unreadMessages: 0
    }, {
      name: "Customers",
      active: false,
      inTabs: true,
      path: "//inbox/customers/",
      placeholder: "Search in 'Customers'",
      unreadMessages: 2
    }, {
      name: "Notifications",
      active: false,
      inTabs: false,
      path: "//inbox/notifications/",
      placeholder: "Search in 'Notifications'",
      unreadMessages: 0
    }],
    currFolder: {}
  },
  methods: {
    updateTab: (i) => {
      if (i !== undefined) {
        vm.currFolder = vm.folders[i];
        vm.currFolder.active = true;
        vm.$children[0].setTab(i + 2);
      }
    },
    updateTabByFolder: (folder) => {
      if (vm && vm.folders && folder !== undefined) {
        var folderIdx = vm.folders.indexOf(folder);
        var tabIdx = vm.getTabFolders().indexOf(folder);
        vm.folders.forEach((d) => d.active = false);

        if (folderIdx !== -1) {
          vm.currFolder = vm.folders[folderIdx];
          vm.currFolder.active = true;
        }
        if (tabIdx !== -1) {
          vm.$children[0].setTab(tabIdx + 2);
        }
      }
    },
    getTabFolders: () => {
      if (vm && vm.folders) {
        return vm.folders.filter((d) => d.inTabs);
      }
      return undefined;
    },
    getSearchPlaceholder: () => {
      if (vm && vm.currFolder && vm.currFolder.placeholder) {
        return vm.currFolder.placeholder;
      }
      return 'Search..';
    },
    showSidebarFolders: () => {
      if (vm && vm.currFolder && vm.currFolder.placeholder) {
        return vm.currFolder.name === "Inbox" || !vm.currFolder.inTabs;
      }
      return true;
    }
  }
});