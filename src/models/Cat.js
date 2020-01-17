export function createCat(spec) {
    return {
        id: spec.id,
        name: spec.name,
        description: spec.description,
        age: spec.age,
        imgFile: (spec.imgFile) ? spec.imgFile : 'cat-default.jpg',
        more: (spec.more) ? spec.more : null
    };
}
