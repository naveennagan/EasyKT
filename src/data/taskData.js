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
            {title: 'step 1', description: '', completedBy: ['a', 'b']},
            {title: 'step 2', description: '', completedBy: ['a']},
            {title: 'final step 3', description: '', completedBy: ['a']}
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
            {title: 'step 1', description: '', completedBy: ['a', 'b', 'c']},
            {title: 'step 2', description: '', completedBy: ['a', 'b', 'c']},
            {title: 'step 3', description: '', completedBy: ['b']},
            {title: 'step 4', description: '', completedBy: ['b']},
            {title: 'final step 5', description: '', completedBy: ['b']},
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
            {title: 'step 1', description: '', completedBy: ['c', 'd']},
            {title: 'step 2', description: '', completedBy: ['c', 'd']},
            {title: 'final step 3', description: '', completedBy: ['c']}
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
            {title: 'step 1', description: '', completedBy: ['a', 'b', 'c']},
            {title: 'step 2', description: '', completedBy: ['a', 'b', 'c']},
            {title: 'step 3', description: '', completedBy: ['b']},
            {title: 'step 4', description: '', completedBy: ['b']},
            {title: 'final step 5', description: '', completedBy: ['b']},
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
            {title: 'step 1', description: '', completedBy: ['c', 'd']},
            {title: 'step 2', description: '', completedBy: ['c', 'd']},
            {title: 'step 3', description: '', completedBy: ['c', 'd']},
            {title: 'final step 4', description: '', completedBy: ['c']}
        ]
    }

];