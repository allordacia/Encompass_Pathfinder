import * as vscode from 'vscode';
import { myDbFunction } from './db/mariadb';



export function activate(context: vscode.ExtensionContext) {
    if (vscode.window.registerWebviewViewProvider) {
        vscode.window.registerWebviewViewProvider('sqlSearchView', new SQLSearchViewProvider());
    }
}

class SQLSearchViewProvider implements vscode.WebviewViewProvider {
    // ... class implementation ...
    
    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
        // Populate the webview here. For instance:
        webviewView.webview.html = this.getHtmlForWebview();
    }

    private getHtmlForWebview() {
        // Return HTML content for the webview, e.g., a search bar
        return `
            <html>
                <!-- Your HTML for the search bar goes here -->
            </html>
        `;
    }
}
