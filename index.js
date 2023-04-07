#!/usr/bin/env node
const fs = require("fs");
const readline = require('readline');
const colors = require("colors");
const path = require("path");
const { createElement } = require("react");
const { exec } = require('child_process');
const { renderToStaticMarkup } = require("react-dom/server");
const aiIcons = require("react-icons/ai");
const bsIcons = require("react-icons/bs");
const cgIcons = require("react-icons/cg");
const diIcons = require("react-icons/di");
const faIcons = require("react-icons/fa");
const fcIcons = require("react-icons/fc");
const fiIcons = require("react-icons/fi");
const giIcons = require("react-icons/gi");
const goIcons = require("react-icons/go");
const grIcons = require("react-icons/gr");
const hiIcons = require("react-icons/hi");
const imIcons = require("react-icons/im");
const ioIcons = require("react-icons/io");
const mdIcons = require("react-icons/md");
const riIcons = require("react-icons/ri");
const siIcons = require("react-icons/si");
const tiIcons = require("react-icons/ti");

const projectDir = "./src"; // Projenizin src dizininin yolu

const ICON_COMPONENT_REGEX =
    /import\s*\{\s*([\w\s{},]*)\s*\}\s*from\s*['"]react-icons\/([\w-]+)['"]\s*;?/g;


function getIconSvg(iconName) {
    // İkon adını büyük harflere dönüştürür.
    const iconFullName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    // İkon ailesini ve bileşenini alır.
    let IconComponent;
    if (aiIcons[iconFullName]) {
        IconComponent = aiIcons[iconFullName];
    } else if (bsIcons[iconFullName]) {
        IconComponent = bsIcons[iconFullName];
    } else if (cgIcons[iconFullName]) {
        IconComponent = cgIcons[iconFullName];
    } else if (diIcons[iconFullName]) {
        IconComponent = diIcons[iconFullName];
    } else if (faIcons[iconFullName]) {
        IconComponent = faIcons[iconFullName];
    } else if (fcIcons[iconFullName]) {
        IconComponent = fcIcons[iconFullName];
    } else if (fiIcons[iconFullName]) {
        IconComponent = fiIcons[iconFullName];
    } else if (giIcons[iconFullName]) {
        IconComponent = giIcons[iconFullName];
    } else if (goIcons[iconFullName]) {
        IconComponent = goIcons[iconFullName];
    } else if (grIcons[iconFullName]) {
        IconComponent = grIcons[iconFullName];
    } else if (hiIcons[iconFullName]) {
        IconComponent = hiIcons[iconFullName];
    } else if (imIcons[iconFullName]) {
        IconComponent = imIcons[iconFullName];
    } else if (ioIcons[iconFullName]) {
        IconComponent = ioIcons[iconFullName];
    } else if (mdIcons[iconFullName]) {
        IconComponent = mdIcons[iconFullName];
    } else if (riIcons[iconFullName]) {
        IconComponent = riIcons[iconFullName];
    } else if (siIcons[iconFullName]) {
        IconComponent = siIcons[iconFullName];
    } else if (tiIcons[iconFullName]) {
        IconComponent = tiIcons[iconFullName];
    } else {
        throw new Error(`Icon ${iconName} not found`);
    }
    // SVG dosyasını oluşturur.
    const svgMarkup = renderToStaticMarkup(createElement(IconComponent));
    const outputDir = path.join("public/assets", "icons");

    // Klasör yoksa oluştur
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const familyName = iconName.substr(0, 2);
    const fileName = `${iconName}.svg`;
    const filePath = path.join(outputDir, familyName, fileName);

    // İlgili klasör yoksa oluştur
    if (!fs.existsSync(path.join(outputDir, familyName))) {
        fs.mkdirSync(path.join(outputDir, familyName));
    }

    // Dosyayı oluştur
    fs.writeFileSync(filePath, svgMarkup);
    return svgMarkup;
}
const getIconMappings = () => {
    const iconMappings = new Map();

    const traverseDirectory = (dirPath) => {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);

            if (fs.statSync(filePath).isDirectory()) {
                traverseDirectory(filePath);
            } else if (
                [".js", ".jsx", ".ts", ".tsx"].includes(path.extname(filePath))
            ) {
                const fileContent = fs.readFileSync(filePath, "utf-8");
                let match;

                while ((match = ICON_COMPONENT_REGEX.exec(fileContent))) {
                    const [fullMatch, namedExports, iconName] = match;
                    const iconPath = path.join("assets", "icons", `${iconName}.svg`);
                    iconMappings.set(namedExports.split(/,\s*/), { iconName, iconPath });
                }
            }
        }
    };

    traverseDirectory(projectDir);

    return iconMappings;
};

const replaceIconsInFile = (filePath, iconMappings) => {
    let fileContent = fs.readFileSync(filePath, "utf-8");

    for (const [iconNames, { iconName, iconPath }] of iconMappings.entries()) {
        iconNames.forEach((iconName) => {
            iconName = iconName.trim();
            getIconSvg(iconName);
            fileContent = fileContent.replace(
                new RegExp(`(<${iconName}\\s*)(.*?)\\/>|(<${iconName}\\s+)(.*?)\\/>`, "g"),
                `<img src="/assets/icons/${iconName.substr(0, 2)}/${iconName}.svg" $2$4/>`
            );

        });
    }
    var newContent = fileContent.replace(ICON_COMPONENT_REGEX, "");

    fs.writeFileSync(filePath, newContent);
};

const copyIcons = () => {
    const iconMappings = getIconMappings();

    const traverseDirectory = (dirPath) => {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);

            if (fs.statSync(filePath).isDirectory()) {
                traverseDirectory(filePath);
            } else if (
                [".js", ".jsx", ".ts", ".tsx"].includes(path.extname(filePath))
            ) {
                replaceIconsInFile(filePath, iconMappings);
            }
        }
    };

    traverseDirectory(projectDir);
    const command = process.argv[2];
}

const removeReactIconsPackage = () => {
    exec('npm remove react-icons');
}

const main = () => {

    console.log(colors.green("Welcome to React Icon Optimizer!"));
    console.log(
        colors.yellow(
            "React Icon Optimizer allows you to reduce the build size by deleting unused icons in the React Icons library used in React projects."
        )
    );
    console.log(colors.blue("What action would you like to do?"));
    console.log(colors.cyan("1. Copy only used icons"));
    console.log(
        colors.cyan(
            "2. Remove React Icons library and copy used icons"
        )
    );
    console.log(colors.red("3. Exit"));


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('your choice : ', async (answer) => {
        switch (answer) {
            case '1':
                console.log(colors.blue('Only icons will be copied...'));
                await copyIcons();
                console.log(colors.green('Icons copied.'));
                break;
            case '2':
                console.log(colors.blue('React-icons library will be removed and icons will be copied...'));
                await copyIcons();
                await removeReactIconsPackage();
                console.log(colors.green('Removed the react-icons library and copied the icons.'));
                break;
            case '3':
                console.log(colors.red('The application is closing.'));
                process.exit(0);
                break;
            default:
                console.log(colors.red('Invalid selection.'));


        }
        rl.close();
    });

};


main();
