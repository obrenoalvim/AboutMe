import { SkillsContainer } from './styles'

interface SkillsProps {
  name: string
}

export default function Skills(props: SkillsProps) {
  return (
    <SkillsContainer>
      <div className="Skills" id="Skills"></div>
    </SkillsContainer>
  )
}
