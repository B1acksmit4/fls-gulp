// Получаем имя папки нашего проекта
import * as nodePath from 'path';
// import { build } from '../../gulpfile';
const rootFolder = nodePath.basename(nodePath.resolve());

const project_folder = `./dist`;   // Также можно использовать rootFolder
const source_folder = `./#src`;

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },

    src: {
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {},
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}