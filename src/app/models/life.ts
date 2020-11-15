export class Life {
    user: any;
    items: any;
    constructor() {
        this.user = 'Cavid',
            this.items = [
                new TodoItem('Seher yemeyi', true),
                new TodoItem('Idman', false),
                new TodoItem('Borc', false),
                new TodoItem('Sinema', false)
            ];
    }
}

export class TodoItem {
    description: any;
    action: any;

    constructor(description: any, action: any) {
        this.description = description;
        this.action = action;
    }
}
