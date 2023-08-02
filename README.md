# Encompass Pathfinder VSCode Extension README

This is a work in progress to create a vscode extension to provide language and coding support for the Encompass mortgage software. This project is not affiliated with ICE Mortgage, the Encompass development team or any of their partners/affiliates.

## Features

Currently Implemented: <br>
- Basic Language support for a custom "vbenc" file extension type. Eventually this will be split out into two different language extensions specific to "Business Rule" and "IFB" types due to the unique requirements and limitations of both editor environments. <br>
- Basic Syntax highlighting for standard VB keywords and ones specific to Encompass itself <br>
- Snippets library of commonly used commands IE "Loan.Fields().Value", "Macro.GetField()", etc. Due to brackets not being available for use in snippets, "FD" can be used to trigger brackets for business rule code. Additionally, some Encompass specific methods have been added with the goal being to eventually include the entirty of the Encompass Objects reference data to assist with writing more complex rules and code.

Roadmap: <br>
- FieldID lookup within certain ID keywords. Users will provide an export file which contains all Standard, Virtual and Custom Fields. The export file will inform the extension of fields description and type which can be used to search/retrieve FieldIDs when the snippet is triggered.

## Requirements

Plugin is currently pre-release and therefore must be manually downloaded and added to your Encompass extensions folder with each new version.

## Extension Settings

    - Forthcoming

## Known Issues

Lots of missing syntax highlighting, adding more with each update.

## Release Notes

## 0.0.1 
Initial release/proof of concept

