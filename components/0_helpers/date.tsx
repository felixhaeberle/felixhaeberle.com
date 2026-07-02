import { parseISO, format } from 'date-fns'
import React from 'react'

interface DateProps {
  dateString: string;
  formatString: string;
}

export default function Date({ dateString, formatString }: DateProps) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, formatString)}</time>
}