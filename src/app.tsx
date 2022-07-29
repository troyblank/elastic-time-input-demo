import React, { useState } from 'react'
import { EuiProvider} from '@elastic/eui'
import moment, { Moment } from 'moment-timezone'
import { TimeInputDemo } from './components'
import { GlobalStyles } from './styles/global.styles'

const TIME_ZONE_OF_EMPLOYEE: string = 'Pacific/Auckland'

const App = () => {
    const [ dateSelected, setDateSelected ] = useState<Moment>(moment.tz( new Date('2022-04-02T20:45:00.000Z'), TIME_ZONE_OF_EMPLOYEE ))

	return (
        <EuiProvider colorMode={'dark'}>
            <GlobalStyles />
            <h1>Hi! 👋🏻 ,</h1>
            <p>This demo shows that elastic's date picker does not handle timezones very well.</p>
            <p>The time picker below represents you editing the time of someone's activity on Sunday, April 3, 2022 at 8:45 AM in 'Pacific/Auckland'. This input is designed to show the time in the person you are editing's time, not your own.</p>
            <TimeInputDemo date={dateSelected} onDateChange={( date: Moment ) => setDateSelected( date )} />
            <br />
            <p>This is the output of that time.</p>
            <pre>{dateSelected.format('MMMM Do YYYY, h:mm:ss a')}</pre>
            <p>This is the output of that same times time zone abbreviation (notice if/when elastic looses it).</p>
            <pre>{dateSelected.zoneAbbr().length ? dateSelected.zoneAbbr() : '(undefined timezone)'}</pre>
            <p>If you use the pre-set time intervals your time stays within the timezone of 'Pacific/Auckland', but if you type into the input the timezone gets stripped and EuiDatePicker's time becomes way off from the day of origin.</p>
            <p>Source can be found here ➡️ <a href={'https://github.com/troyblank/elastic-time-input-demo'}>https://github.com/troyblank/elastic-time-input-demo</a></p>
        </EuiProvider>
	)
}

export default App
