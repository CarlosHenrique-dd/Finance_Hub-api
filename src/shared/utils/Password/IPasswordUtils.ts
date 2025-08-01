export default interface IPasswordUtils {
	crypto(password: string): Promise<string>
	compare(password: string, hashPassword: string): Promise<boolean>
}
