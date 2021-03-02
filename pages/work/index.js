import styled from 'styled-components'
import { format, parseISO } from 'date-fns'
import {getSortedData} from '../../lib/content'
import Layout from '../../components/4_templates/Layout'
import Head from 'next/head'
import Text from '../../components/1_atoms/Text'
import HeaderWrapper from '../../components/1_atoms/HeaderWrapper'
import HeaderText from '../../components/1_atoms/HeaderText'
import Date from '../../components/date'
import Card from '../../components/2_molecules/Card'

const WorkItem = styled.div``;

WorkItem.Wrapper = styled.div`
  margin-top: calc(var(--rowGap)*1.5);
  padding-top: calc(var(--rowGap));
  border-top: 1px solid var(--colorTextDark);
`

WorkItem.Year = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`

export default function Work({ workList }) {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <HeaderWrapper>
          <Text.Large>Work</Text.Large>
      </HeaderWrapper>
      <div>
        <HeaderText />
        <WorkItem.Wrapper>
          <r-grid columns="6" columns-s="2" columns-xs="1">
            {workList.map(({ id, date, title, text }, index, arr) => {
              // Is it a new year?
              let newYear = false;
              if(arr[index] && arr[index-1]){
                newYear = format(parseISO(arr[index].date), 'yyyy') !== format(parseISO(arr[index-1].date), 'yyyy') ? true : false;
              } else {
                newYear = true;
              }

              return(
                <>
                  {/* Year */}
                  {newYear ? <r-cell span="row"><WorkItem.Year><Date dateString={date} formatString={'yyyy'}/></WorkItem.Year></r-cell> : ''}
                  {/* Project */}
                  <r-cell span="2" span-s="1">
                    <Card link={`x`}
                      title={title}
                      text={text}
                      key={id} />
                  </r-cell>
                </>
              )
            })}
          </r-grid>
        </WorkItem.Wrapper>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let allWorkData = getSortedData('content/work');
  return {
    props: {
      workList: allWorkData
    }
  }
} 