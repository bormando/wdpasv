async function addCommands() {
    await browser.addCommand('smartClear', async function () {
        const value = await this.getValue();
        for await (let character of value) {
            await this.keys(['Backspace']);
        }
    }, true);
}

export { addCommands };