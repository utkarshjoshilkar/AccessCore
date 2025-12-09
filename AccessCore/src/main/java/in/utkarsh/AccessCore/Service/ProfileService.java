package in.utkarsh.AccessCore.Service;

import in.utkarsh.AccessCore.io.ProfileRequest;
import in.utkarsh.AccessCore.io.ProfileResponse;
import org.springframework.stereotype.Service;

@Service
public interface ProfileService {

    ProfileResponse createProfile(ProfileRequest request);

    ProfileResponse getProfile(String email);   

    void sendResetOtp(String email);

    void resetPassword(String email,String otp, String password);

    void sendOtp(String email);

    void verifyOtp(String email, String otp);

    // String getLoggedInUserId(String email);
}
