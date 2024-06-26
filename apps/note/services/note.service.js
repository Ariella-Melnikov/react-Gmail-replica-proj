// note service

const notes = [
    {
      id: 'n101',
      createdAt: 1112233,
      type: 'NoteTxt',
      isPinned: false,
      style: {
        backgroundColor: '#0d0'
      },
      info: {
        txt: 'Hello World!'
      }
    },
    {
      id: 'n102',
      createdAt: 1112244,
      type: 'NoteImg',
      isPinned: true,
      info: {
        url: 'http://some-img/me2',
        title: 'Lunch Time'
      },
      style: {
        backgroundColor: '#d00'
      }
    },
    {
      id: 'n103',
      createdAt: 1112255,
      type: 'NoteTodos',
      isPinned: false,
      info: {
        title: 'Weekend Chores',
        todos: [
          { txt: 'Grocery shopping', doneAt: null },
          { txt: 'Clean the house', doneAt: 187111112 }
        ]
      }
    },
    {
      id: 'n104',
      createdAt: 1112266,
      type: 'NoteTxt',
      isPinned: true,
      style: {
        backgroundColor: '#00d'
      },
      info: {
        txt: 'Read the new book'
      }
    },
    {
      id: 'n105',
      createdAt: 1112277,
      type: 'NoteImg',
      isPinned: false,
      info: {
        url: 'http://some-img/me5',
        title: 'New Car'
      },
      style: {
        backgroundColor: '#ddd'
      }
    },
    {
      id: 'n106',
      createdAt: 1112288,
      type: 'NoteTodos',
      isPinned: true,
      info: {
        title: 'To-Do Tomorrow',
        todos: [
          { txt: 'Send emails', doneAt: 187111113 },
          { txt: 'Prepare meeting', doneAt: null }
        ]
      }
    },
    {
      id: 'n107',
      createdAt: 1112299,
      type: 'NoteTxt',
      isPinned: false,
      style: {
        backgroundColor: '#0d0'
      },
      info: {
        txt: 'Complete the project report'
      }
    },
    {
      id: 'n108',
      createdAt: 1112300,
      type: 'NoteImg',
      isPinned: true,
      info: {
        url: 'http://some-img/me8',
        title: 'Holiday Plans'
      },
      style: {
        backgroundColor: '#d00'
      }
    },
    {
      id: 'n109',
      createdAt: 1112311,
      type: 'NoteTodos',
      isPinned: false,
      info: {
        title: 'Fitness Goals',
        todos: [
          { txt: 'Join a gym', doneAt: null },
          { txt: 'Start yoga', doneAt: 187111114 }
        ]
      }
    },
    {
      id: 'n110',
      createdAt: 1112322,
      type: 'NoteTxt',
      isPinned: true,
      style: {
        backgroundColor: '#00d'
      },
      info: {
        txt: 'Explore Python for data analysis'
      }
    },
    {
      id: 'n111',
      createdAt: 1112333,
      type: 'NoteImg',
      isPinned: false,
      info: {
        url: 'http://some-img/me11',
        title: 'Picnic Day'
      },
      style: {
        backgroundColor: '#ddd'
      }
    },
    {
      id: 'n112',
      createdAt: 1112344,
      type: 'NoteTodos',
      isPinned: true,
      info: {
        title: 'Shopping List',
        todos: [
          { txt: 'Buy milk', doneAt: 187111115 },
          { txt: 'Order pizza', doneAt: null }
        ]
      }
    },
    {
      id: 'n113',
      createdAt: 1112355,
      type: 'NoteTxt',
      isPinned: false,
      style: {
        backgroundColor: '#0d0'
      },
      info: {
        txt: 'Review the new JavaScript framework'
      }
    },
    {
      id: 'n114',
      createdAt: 1112366,
      type: 'NoteImg',
      isPinned: true,
      info: {
        url: 'http://some-img/me14',
        title: 'Garden Before and After'
      },
      style: {
        backgroundColor: '#d00'
      }
    },
    {
      id: 'n115',
      createdAt: 1112377,
      type: 'NoteTodos',
      isPinned: false,
      info: {
        title: 'Home Improvement Tasks',
        todos: [
          { txt: 'Fix the sink', doneAt: null },
          { txt: 'Paint the bedroom', doneAt: 187111116 }
        ]
      }
    },
    {
      id: 'n116',
      createdAt: 1112388,
      type: 'NoteTxt',
      isPinned: true,
      style: {
        backgroundColor: '#00d'
      },
      info: {
        txt: 'Learn how to make sushi'
      }
    },
    {
      id: 'n117',
      createdAt: 1112399,
      type: 'NoteImg',
      isPinned: false,
      info: {
        url: 'http://some-img/me17',
        title: 'First Attempt at Painting'
      },
      style: {
        backgroundColor: '#ddd'
      }
    },
    {
      id: 'n118',
      createdAt: 1112400,
      type: 'NoteTodos',
      isPinned: true,
      info: {
        title: 'Study Schedule',
        todos: [
          { txt: 'Math revision', doneAt: 187111117 },
          { txt: 'Chemistry lab', doneAt: null }
        ]
      }
    },
    {
      id: 'n119',
      createdAt: 1112411,
      type: 'NoteTxt',
      isPinned: false,
      style: {
        backgroundColor: '#0d0'
      },
      info: {
        txt: 'Plan the next trip to Japan'
      }
    },
    {
      id: 'n120',
      createdAt: 1112422,
      type: 'NoteImg',
      isPinned: true,
      info: {
        url: 'http://some-img/me20',
        title: 'Snowy Mountains'
      },
      style: {
        backgroundColor: '#d00'
      }
    }
  ]