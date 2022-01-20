package com.fitmate.backend.service;

import com.fitmate.backend.dto.MemberDto;
import com.fitmate.backend.entity.Member;
import com.fitmate.backend.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    @Transactional
    public Long signup(Member member){
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member){
        memberRepository.findByEmail(member.getEmail())
                .ifPresent(m -> {throw new IllegalStateException("The email already exists by email");});

        memberRepository.findByNickname(member.getName())
                .ifPresent(m -> {throw new IllegalStateException("The email already exists by nickname");});
    }

    public List<Member> findMembers(){return memberRepository.findAll();}
    public Member findOne(Long memberNo){
        return memberRepository.findById(memberNo).orElseThrow(
                ()-> new NotFoundException("This member is not found!!")
        );
    }

    @Transactional
    public Member updateMember(Long id, MemberDto dto){
        Member member = memberRepository.findById(id).orElseThrow(()->new NotFoundException("This member is not found!!"));
        member.updateMember(dto);
        return memberRepository.save(member);
    }
    @Transactional
    public Long deleteMember(Long id){
        Member member = memberRepository.findById(id)
                .orElseThrow(()->new NotFoundException("This member is not found!!"));
        memberRepository.deleteById(id);
        return id;
    }



}
