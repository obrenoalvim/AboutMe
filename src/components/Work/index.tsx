import { WorkContainer } from './styles'

interface WorkProps {
  name: string
}

export default function Work(props: WorkProps) {
  return (
    <WorkContainer>
      <div className="Work" id="Work"></div>
    </WorkContainer>
  )
}
