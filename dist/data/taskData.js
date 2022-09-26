"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tasksData = exports.Type = exports.Status = void 0;
var JioText1 = "<p><b>Installing Firefox and ADB:</b> </p><p>If you already have another version of Firefox installed, uninstall it and remove the profiles related to it. To remove profiles in MAC, open terminal and go to Library/Application\ Support/Firefox/, remove the profiles folder you find there<ol><li>Install Firefox 56.0.1 <p><a href='#testLink'>https://ftp.mozilla.org/pub/firefox/releases/56.0.1/mac/en-US/</a></p></li><li>Then download ADB helper addon and install from Firefox. Disable auto updates of addons by going to 'config:addons' as shown in snapshot below <p><a href='#testLink'>https://ftp.mozilla.org/pub/labs/fxos-simulator/adb-helper/mac64/adbhelper-0.10.0-mac64.xpi </a></p></li></ol><p>Disable auto update of the browser following steps in this link: <a>https://www.technipages.com/enable-disable-automatic-updates-in-firefox</a></p><p>Disable the check for auto update in Firefox browser. Go to 'about:preferences' and under 'Firefox updates' select the option 'Never check for updates'</p>";
var JioText2 = "<p><b>Running your app on Simulator</b></p><p><ul><li>Open WebIDE Firefox developer tools.</li><li>On the right pane, click on install simulator and install the latest stable version which is Firefox OS 2.2</li><li>Click on the installed simulator to start the simulator panel.</li><li>Mac throws error that this is from unauthorised author, allow this to run from System pref -> Security/Privacy</li><li>Now you can sideload apps to simulator from left pane of WebIDE</li></ul></p><p><br><br><b>Running your app on Phone:</b></p><p><ul><li>Enable developer tools in your phone. Settings -> Devices -> Developer -> ADB & Devtools (Note: Only phones procured from Jio directly have the option show in settings. For other phones we need to jailbreak)</li><li>Connect the phone to your Mac using a USB device</li><li>Download ADB from <a> https://dl.google.com/android/repository/platform-tools-latest-darwin.zip </a></li><li>Once downloaded and ungzipped a folder with 'platform-tools' name will be extracted.</li><li>Open terminal app and go to the 'platform-tools' folder</li><li>Once inside 'platform-tools', enter './adb devices' command. It should show something like this</li></ul></p>";
var JioText3 = "<p><p>Then click on open packaged app on left panel of webIDE</p><p>Navigate to build folder inside your repo shared/internal/build/build</p><p>Now click on the play button at the top, app will be installed (already installed app will be replaced)</p><p>For debugging click on the tool button at the top. Since webIDE is not supported, so many of the tabs inside debug window will cause crash. So try to click on the console button as soon as you open debug window. (In case of crash, follow all the steps again)</p><br><br><b>Other references:</b><p><ol><li><a href='#testLink'>https://developer.kaiostech.com/getting-started/env-setup/os-env-setup</a></li><li><a href='#testLink'>https://sites.google.com/view/bananahackers/development/debug-mode </a></li><li><a href='#testLink'>https://sites.google.com/view/bananahackers/development/adb</a></li</ol></p></p>";
var JioImageData = {
  text: "Now open WebIDE and it should show the connected device on the right under 'USB devices' section similar to the below snapshot",
  link: "https://i.postimg.cc/9XJXFkPX/Screenshot-2022-09-23-at-4-44-58-PM.png"
};
var JioVideoData = {
  text: "This is the recorded session of the jio onboarding process. ",
  link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
};
var JioQuizData = {
  question: 'In case clicking on the USB device gave "Connection failed" error, which step you have to follow?',
  options: ["Run './adb root && ./adb forward tcp:6000 localfilesystem:/data/local/debugger-socket' in terminal where adb folder is present", 'Turn off and turn on debugging mode in phone', 'Restart firefox', 'Click on the remote runtime on right panel of WebIDE and click on open when the dialog opens without changing the host location'],
  answer: "Run './adb root && ./adb forward tcp:6000 localfilesystem:/data/local/debugger-socket' in terminal where adb folder is present"
};
var text = "<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p> <p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>";
var TextData = {
  text: text
};
var QuizData = {
  question: 'Which is not true about typescript?',
  options: ['It is interpreted like javascript', 'It is a superset of javascript', 'It does support static data types', 'Typescript is case sensitive'],
  answer: 'It is a superset of javascript'
};
var VideoData = {
  text: 'Playing Video. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
};
var ImageData = {
  text: 'Cat Image. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
  link: 'https://www.integrify.com/site/assets/files/2435/best-workflow-management-software.png'
};
var Type = {
  Image: 'image',
  Video: 'video',
  Text: 'text',
  Quiz: 'quiz'
};
exports.Type = Type;
var Status = {
  Completed: 'Completed',
  Pending: 'Pending',
  InProgress: 'In Progress'
};
exports.Status = Status;
var tasksData = [{
  id: "1",
  name: "Onboarding flow",
  status: "Progress",
  workflow: "workflow-1",
  currentStep: 1,
  totalSteps: 6,
  triggeredBy: "Steve",
  steps: [{
    title: 'Step 1',
    description: {
      type: Type.Text,
      data: {
        text: JioText1
      }
    },
    completedBy: ['Naveen', 'Abhishek', 'Nandita']
  }, {
    title: 'Step 2',
    description: {
      type: Type.Image,
      data: {
        text: JioText2
      }
    },
    completedBy: ['Naveen', 'Nandita']
  }, {
    title: 'Step 3',
    description: {
      type: Type.Image,
      data: JioImageData
    },
    completedBy: ['Naveen', 'Abhishek', 'Vedika']
  }, {
    title: 'Step 4',
    description: {
      type: Type.Video,
      data: JioVideoData
    },
    completedBy: ['Naveen']
  }, {
    title: 'Step 5',
    description: {
      type: Type.Text,
      data: {
        text: JioText3
      }
    },
    completedBy: ['Naveen']
  }, {
    title: 'Final Step 6',
    description: {
      type: Type.Quiz,
      data: JioQuizData
    },
    completedBy: ['Naveen']
  }]
}, {
  id: "2",
  name: "Data import",
  status: "Progress",
  workflow: "workflow-2",
  currentStep: 3,
  totalSteps: 5,
  triggeredBy: "John",
  steps: [{
    title: 'Step 1',
    description: {
      type: Type.Image,
      data: ImageData
    },
    completedBy: ['Naveen', 'Abhishek', 'Vedika']
  }, {
    title: 'Step 2',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Naveen', 'Abhishek', 'Vedika']
  }, {
    title: 'Step 3',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Abhishek', 'Vedika']
  }, {
    title: 'Step 4',
    description: {
      type: Type.Image,
      data: ImageData
    },
    completedBy: ['Abhishek', 'Vedika']
  }, {
    title: 'Final step 5',
    description: {
      type: Type.Quiz,
      data: QuizData
    },
    completedBy: ['Abhishek']
  }]
}, {
  id: "3",
  name: "Machine setup",
  status: "Done",
  workflow: "workflow-3",
  currentStep: 3,
  totalSteps: 3,
  triggeredBy: "John",
  steps: [{
    title: 'Step 1',
    description: {
      type: Type.Image,
      data: ImageData
    },
    completedBy: ['Vedika', 'Nandita']
  }, {
    title: 'Step 2',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Vedika', 'Nandita']
  }, {
    title: 'Final step 3',
    description: {
      type: Type.Quiz,
      data: QuizData
    },
    completedBy: ['Vedika']
  }]
}, {
  id: "4",
  name: "Frontend Setup",
  status: "Progress",
  workflow: "workflow-4",
  currentStep: 2,
  totalSteps: 5,
  triggeredBy: "Steve",
  steps: [{
    title: 'Step 1',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Naveen', 'Abhishek', 'Vedika']
  }, {
    title: 'Step 2',
    description: {
      type: Type.Image,
      data: ImageData
    },
    completedBy: ['Naveen', 'Abhishek', 'Vedika']
  }, {
    title: 'Step 3',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Naveen', 'Abhishek']
  }, {
    title: 'Step 4',
    description: {
      type: Type.Video,
      data: VideoData
    },
    completedBy: ['Naveen', 'Abhishek']
  }, {
    title: 'Final step 5',
    description: {
      type: Type.Quiz,
      data: QuizData
    },
    completedBy: ['Abhishek']
  }]
}, {
  id: "5",
  name: "Sign Documents",
  status: "Done",
  workflow: "workflow-5",
  currentStep: 3,
  totalSteps: 4,
  triggeredBy: "John",
  steps: [{
    title: 'Step 1',
    description: {
      type: Type.Video,
      data: VideoData
    },
    completedBy: ['Vedika', 'Nandita']
  }, {
    title: 'Step 2',
    description: {
      type: Type.Text,
      data: TextData
    },
    completedBy: ['Vedika', 'Nandita']
  }, {
    title: 'Step 3',
    description: {
      type: Type.Image,
      data: ImageData
    },
    completedBy: ['Vedika', 'Nandita']
  }, {
    title: 'Final step 4',
    description: {
      type: Type.Quiz,
      data: QuizData
    },
    completedBy: ['Nandita']
  }]
}];
exports.tasksData = tasksData;