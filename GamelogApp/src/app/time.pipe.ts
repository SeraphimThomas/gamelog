import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'time'})

export class TimePipe implements PipeTransform{
    transform(minutes: number): string {
        const hours = Math.floor(minutes);
        const minutesLeft = Math.round(minutes % 60);
        return `${hours < 10 ? '0' : ''}${hours}:${minutesLeft < 10 ? '0': ''}${minutesLeft}`
    }
}