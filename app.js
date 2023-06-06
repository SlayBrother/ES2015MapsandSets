const myMap = new Map();
myMap.set(7, 'seven')
myMap.set(7, 'seven string')
const empty = []
myMap.set(empty, 'empty array!')
myMap.set(true, 'TRUEEEE!')

const add = (x,y) => x + y; 
const mult = (x,y) => x * y; 

const funcCalls = new Map();
funcCalls.set(add,0)
funcCalls.set(mult,0)

funcCalls.set(add,1)
funcCalls.set(mult,9)

const bandData = [ 
    [3, "Three Doors Down"],
['three',  'Three Dog Night'],
['nine', 'Nine Inch Nails'], 
['four', 'The Four Seasons'], 
[41, "Sum 41"]
];
const bandMap = new Map(bandData);

bandMap.set(182, 'Blink 182').set('twenty', 'Matchbox twenty')

bandMap.delete('twenty')

bandMap.forEach((val, key) => {
    // console.log(key + '=>' + val)
})

for (let x of bandMap){
    // console.log(x)
}

'nofilter', 'justsaying', 'winning', 'yolo';

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

// const bannedHashTags = new Set('hello', 'goodbye');

bannedHashTags.add('bestlife').add('selfie')

// bannedHashTags.delete('winning')

function filterHashTags(tags){
    const bannedHashTags = new Set ([ 'nofilter', 'justsaying', 'winning', 'yolo'])
    return tags.filter((tag)=> !bannedHashTags.has(tag))
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset']

const ages = [45,42,56,32,65,3,3,3,12,43,65,9];
[...new Set(ages)]

