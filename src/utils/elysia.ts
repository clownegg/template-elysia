import { Context } from "elysia";

type ElysiaErrorCode = "UNKNOWN" | "VALIDATION" | "NOT_FOUND" | "PARSE" | "INTERNAL_SERVER_ERROR" | "INVALID_COOKIE_SIGNATURE"

// biome-ignore lint/suspicious/noExplicitAny:
export const stringToBoolean = (v?: any) => {
	switch (v) {
		case "true":
			return true;
		case "false":
			return false;
	}

	return false;
};

// biome-ignore lint/suspicious/noExplicitAny:
export const stringToNumber = (v?: any) => {
	return Number(v);
};

// biome-ignore lint/suspicious/noExplicitAny:
export const errorResponse = (error: any, code: ElysiaErrorCode, set: Context["set"]) => {
	switch (code) {
		case "VALIDATION": {
			set.status = 400
			return error?.message
		}
	}

	switch (error?.name) {
		case "NotFoundError": {
			set.status = 404;
			return error?.message;
		}
	}

	set.status = 500
	return error?.message
};
