import en from './en'
import zh from './zh'
const mapValue=function(lan:string){
    switch(lan){
        case 'en':
            return en;
        case 'zh':
        default:
            return zh
    }
}
interface Params{
    x:string,
    y:string
}

export default function i18n(key:string,value:string){
    const lan=localStorage.getItem('language') || 'zh';
    const map:object = mapValue(lan);
    type K = keyof typeof map;
    return map[key as K] || value
}