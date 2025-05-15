import { theme } from './theme'
export const config = {
	theme: {
		colors: {
			primary: {
				DEFAULT: theme['root']['--primary'],
				foreground: theme['root']['--primary-foreground'],
			},
			secondary: {
				DEFAULT: theme['root']['--secondary'],
				foreground: theme['root']['--secondary-foreground'],
			},
			foreground: {
				DEFAULT: theme['root']['--foreground'],
				dark: theme['root']['--foreground-dark'],
				light: theme['root']['--foreground-light'],
			},
			background: {
				DEFAULT: theme['root']['--background'],
				dark: theme['root']['--background-dark'],
				light: theme['root']['--background-light'],
			},
			destructive: {
				DEFAULT: theme['root']['--destructive'],
				foreground: theme['root']['--destructive-foreground'],
			},
			muted: {
				DEFAULT: theme['root']['--muted'],
				foreground: theme['root']['--muted-foreground'],
			},
			accent: {
				DEFAULT: theme['root']['--accent'],
				foreground: theme['root']['--accent-foreground'],
			},
			info: {
				DEFAULT: theme['root']['--info'],
				background: theme['root']['--info-background'],
				foreground: theme['root']['--info-foreground'],
				border: theme['root']['--info-border'],
			},
			warning: {
				DEFAULT: theme['root']['--warning'],
				background: theme['root']['--warning-background'],
				foreground: theme['root']['--warning-foreground'],
				border: theme['root']['--warning-border'],
			},
			success: {
				DEFAULT: theme['root']['--success'],
				background: theme['root']['--success-background'],
				foreground: theme['root']['--success-foreground'],
				border: theme['root']['--success-border'],
			},
			error: {
				DEFAULT: theme['root']['--error'],
				background: theme['root']['--error-background'],
				foreground: theme['root']['--error-foreground'],
				border: theme['root']['--error-border'],
			},
			border: {
				DEFAULT: theme['root']['--border'],
				primary: theme['root']['--border-primary'],
				secondary: theme['root']['--border-secondary'],
			},
			white: {
				DEFAULT: theme['root']['--white'],
			},
			black: {
				DEFAULT: theme['root']['--black'],
			},
		},
	},
}

export const configDark = {
	theme: {
		colors: {
			primary: {
				DEFAULT: theme['root']['--primary'],
				foreground: theme['root']['--primary-foreground'],
			},
			secondary: {
				DEFAULT: theme['root']['--secondary'],
				foreground: theme['root']['--secondary-foreground'],
			},
			foreground: {
				DEFAULT: theme['root']['--foreground'],
				dark: theme['root']['--foreground-dark'],
				light: theme['root']['--foreground-light'],
			},
			background: {
				DEFAULT: theme['root']['--background'],
				dark: theme['root']['--background-dark'],
				light: theme['root']['--background-light'],
			},
			destructive: {
				DEFAULT: theme['root']['--destructive'],
				foreground: theme['root']['--destructive-foreground'],
			},
			muted: {
				DEFAULT: theme['root']['--muted'],
				foreground: theme['root']['--muted-foreground'],
			},
			accent: {
				DEFAULT: theme['root']['--accent'],
				foreground: theme['root']['--accent-foreground'],
			},
			info: {
				DEFAULT: theme['root']['--info'],
				background: theme['root']['--info-background'],
				foreground: theme['root']['--info-foreground'],
				border: theme['root']['--info-border'],
			},
			warning: {
				DEFAULT: theme['root']['--warning'],
				background: theme['root']['--warning-background'],
				foreground: theme['root']['--warning-foreground'],
				border: theme['root']['--warning-border'],
			},
			success: {
				DEFAULT: theme['root']['--success'],
				background: theme['root']['--success-background'],
				foreground: theme['root']['--success-foreground'],
				border: theme['root']['--success-border'],
			},
			error: {
				DEFAULT: theme['root']['--error'],
				background: theme['root']['--error-background'],
				foreground: theme['root']['--error-foreground'],
				border: theme['root']['--error-border'],
			},
			border: {
				DEFAULT: theme['root']['--border'],
				primary: theme['root']['--border-primary'],
				secondary: theme['root']['--border-secondary'],
			},
			input: {
				DEFAULT: theme['root']['--border'],
				primary: theme['root']['--border-primary'],
				secondary: theme['root']['--border-secondary'],
			},
			white: {
				DEFAULT: theme['root']['--white'],
			},
			black: {
				DEFAULT: theme['root']['--black'],
			},
		},
	},
}


console.log(config)
