
const text = "<p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p> <p><b>Lorem ipsum dolor laboriosam.</b> </p><p>Facere debitis impedit doloremque eveniet eligendi reiciendis <u>ratione obcaecati repellendus</u> culpa? Blanditiis enim cum tenetur non rem, atque, earum quis, reprehenderit accusantium iure quas beatae.</p><p>Lorem ipsum dolor sit amet <a href='#testLink'>this is a link, click me</a> Sunt ducimus corrupti? Eveniet velit numquam deleniti, delectus  <ol><li>reiciendis ratione obcaecati</li><li>repellendus culpa? Blanditiis enim</li><li>cum tenetur non rem, atque, earum quis,</li></ol>reprehenderit accusantium iure quas beatae.</p>"

const TextData = {
    text: text
}

const QuizData = {
    question: 'Which is not true about typescript?',
    options: ['It is interpreted like javascript', 'It is a superset of javascript', 'It does support static data types', 'Typescript is case sensitive'],
    answer: 'It is a superset of javascript'
}

const VideoData = {
    text: 'Playing Video. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    link: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
}

const ImageData = {
    text: 'Cat Image. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    link: 'https://www.integrify.com/site/assets/files/2435/best-workflow-management-software.png'
}


export const Type = {
    Image: 'image',
    Video: 'video',
    Text: 'text',
    Quiz: 'quiz'
}

export const Status = {
    Completed: 'Completed',
    Pending: 'Pending',
    InProgress: 'In Progress'
}

export const tasksData = [
    {
        id: "1",
        name: "Onboarding flow",
        status:"Progress",
        workflow: "workflow-1",
        currentStep: 2,
        totalSteps: 4,
        triggeredBy: "Steve",
        steps: [
            {title: 'Step 1', description: {type: Type.Text, data: TextData}, completedBy: ['Naveen', 'Abhishek', 'Nandita']},
            {title: 'Step 2', description: {type: Type.Image, data: ImageData}, completedBy: ['Naveen', 'Nandita']},
            {title: 'Step 3', description: {type: Type.Video, data: VideoData}, completedBy: ['Naveen']},
            {title: 'Final step 4', description: {type: Type.Quiz, data: QuizData}, completedBy: ['Naveen']}
        ]
    },
    {
        id: "2",
        name: "Data import",
        status:"Progress",
        workflow: "workflow-2",
        currentStep: 3,
        totalSteps: 5,
        triggeredBy: "John",
        steps: [
            {type: Type.Text, title: 'Step 1', description: {type: Type.Image, data: ImageData},completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Step 2', description: {type: Type.Text, data: TextData},completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Step 3', description: {type: Type.Text, data: TextData},completedBy: ['Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Step 4', description: {type: Type.Image, data: ImageData},completedBy: ['Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Final step 5',description: {type: Type.Quiz, data: QuizData},completedBy: ['Abhishek']},
        ]
    },
    {
        id: "3",
        name: "Machine setup",
        status:"Done",
        workflow: "workflow-3",
        currentStep: 3,
        totalSteps: 3,
        triggeredBy: "John",
        steps: [
            {type: Type.Text, title: 'Step 1', description: {type: Type.Image, data: ImageData},completedBy: ['Vedika', 'Nandita']},
            {type: Type.Text, title: 'Step 2', description: {type: Type.Text, data: TextData},completedBy: ['Vedika', 'Nandita']},
            {type: Type.Text, title: 'Final step 3', description: {type: Type.Quiz, data: QuizData},completedBy: ['Vedika']}
        ]
    },
    {
        id: "4",
        name: "Frontend Setup",
        status:"Progress",
        workflow: "workflow-4",
        currentStep: 2,
        totalSteps: 5,
        triggeredBy: "Steve",
        steps: [
            {type: Type.Text, title: 'Step 1', description: {type: Type.Text, data: TextData},completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Step 2', description: {type: Type.Image, data: ImageData},completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {type: Type.Text, title: 'Step 3', description: {type: Type.Text, data: TextData},completedBy: ['Naveen', 'Abhishek']},
            {type: Type.Text, title: 'Step 4', description: {type: Type.Video, data: VideoData},completedBy: ['Naveen', 'Abhishek']},
            {type: Type.Text, title: 'Final step 5', description: {type: Type.Quiz, data: QuizData},completedBy: ['Abhishek']},
        ]
    },
    {
        id: "5",
        name: "Sign Documents",
        status:"Done",
        workflow: "workflow-5",
        currentStep: 3,
        totalSteps: 4,
        triggeredBy: "John",
        steps: [
            {type: Type.Text, title: 'Step 1',description: {type: Type.Video, data: VideoData},completedBy: ['Vedika', 'Nandita']},
            {type: Type.Text, title: 'Step 2', description: {type: Type.Text, data: TextData},completedBy: ['Vedika', 'Nandita']},
            {type: Type.Text, title: 'Step 3', description: {type: Type.Image, data: ImageData},completedBy: ['Vedika', 'Nandita']},
            {type: Type.Text, title: 'Final step 4',description: {type: Type.Quiz, data: QuizData},completedBy: ['Nandita']}
        ]
    }

];