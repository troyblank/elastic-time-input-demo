import React from 'react'
import { EuiDatePicker} from '@elastic/eui'
import { Moment } from 'moment-timezone'

type PropsType = {
    date: Moment,
    onDateChange: Function,
}

export const TimeInputDemo: React.FC<PropsType> = ( { date, onDateChange } ) => {
	const handleChange = ( date: Moment ) => onDateChange(date)

	return (
		<EuiDatePicker
            showTimeSelect
            showTimeSelectOnly
            selected={date}
            onChange={handleChange}
            dateFormat={'hh:mm a'}
            timeFormat={'hh:mm a'}
            timeIntervals={15}
            fullWidth
        />
	)
}
