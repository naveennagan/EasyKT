const descriptionType1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const descriptionType2 = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,`;

const descriptionType3 = 
`1. Ensure the team knows where deep smarts reside in the organization and which are at risk of loss or overutilization because they are rare.\n2. Train experts as knowledge mentors for the next generation. 
3. Help less-experienced employees learn how to pull knowledge from those with deep smarts.
4. If the need for knowledge transfer is acute and immediate, seek tools and techniques beyond exit interviews.
5. Build knowledge transfer into the organization’s DNA.`;

export const tasksData = [
    {
        id: "1",
        name: "Onboarding flow",
        status:"Progress",
        workflow: "workflow-1",
        currentStep: 2,
        totalSteps: 3,
        triggeredBy: "Steve",
        steps: [
            {title: 'step 1', description: descriptionType1, completedBy: ['Naveen', 'Abhishek', 'Nandita']},
            {title: 'Step 2', description: descriptionType2, completedBy: ['Naveen', 'Nandita']},
            {title: 'Final step 3', description: descriptionType3, completedBy: ['Naveen']}
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
            {title: 'Step 1', description: descriptionType1, completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {title: 'Step 2', description: descriptionType2, completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {title: 'Step 3', description: descriptionType3, completedBy: ['Abhishek', 'Vedika']},
            {title: 'Step 4', description: descriptionType1, completedBy: ['Abhishek', 'Vedika']},
            {title: 'Final step 5', description: descriptionType2, completedBy: ['Abhishek']},
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
            {title: 'Step 1', description: descriptionType1, completedBy: ['Vedika', 'Nandita']},
            {title: 'Step 2', description: descriptionType2, completedBy: ['Vedika', 'Nandita']},
            {title: 'Final step 3', description: descriptionType3, completedBy: ['Vedika']}
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
            {title: 'Step 1', description: descriptionType1, completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {title: 'Step 2', description: descriptionType2, completedBy: ['Naveen', 'Abhishek', 'Vedika']},
            {title: 'Step 3', description: descriptionType3, completedBy: ['Naveen', 'Abhishek']},
            {title: 'Step 4', description: descriptionType1, completedBy: ['Naveen', 'Abhishek']},
            {title: 'Final step 5', description: descriptionType2, completedBy: ['Abhishek']},
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
            {title: 'Step 1', description: descriptionType1, completedBy: ['Vedika', 'Nandita']},
            {title: 'Step 2', description: descriptionType2, completedBy: ['Vedika', 'Nandita']},
            {title: 'Step 3', description: descriptionType3, completedBy: ['Vedika', 'Nandita']},
            {title: 'Final step 4', description: descriptionType1, completedBy: ['Nandita']}
        ]
    }

];