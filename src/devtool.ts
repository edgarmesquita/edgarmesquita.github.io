export const devTool = (store: any, self: any) => {
    let i = 0
    const snapshots: any[] = [{ state: store.initialState }]

    const style = `
    font-size: 12px;
    color: #673AB7;
  `

    console.info('%ctime travel with: ⌥ + ←', style)

    window.addEventListener('keydown', e => {
        if (e.altKey && e.key === 'ArrowLeft') {
            self.state = {}
            i = i > 0 ? i - 1 : i
            self.setState(snapshots[i].state)
        }

        if (e.altKey && e.key === 'ArrowRight') {
            self.state = {}
            i = i < snapshots.length - 1 ? i + 1 : i
            self.setState(snapshots[i].state)
        }
    })

    return (action: any) => {
        console.info(`%c${action}`, style, self.state);
        snapshots.push({ action, state: self.state });
        i = snapshots.length - 1
    }
}