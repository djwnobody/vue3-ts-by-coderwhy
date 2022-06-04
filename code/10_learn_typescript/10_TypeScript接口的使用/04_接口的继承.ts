interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

interface IAction extends ISwim, IFly {
  name: string
}

const action: IAction = {
  name: 'djw',
  swimming() {},
  flying() {},
}
